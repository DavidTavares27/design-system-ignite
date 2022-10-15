import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor} from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from "./signIn";

export default {
  titulo: "Pages/Sign in",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handles: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado com sucesso!'
          }))
        })
      ]
    }
  }
}as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {   
    const canvas = within(canvasElement)  //canvas é a tela que mostra os componentes do storybook 
    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'davidtavares1987@gmail.com')            //pegar elemento dentro do html
    userEvent.type(canvas.getByPlaceholderText('**********'), '12345678')    //pegar elemento dentro do html

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado com sucesso!')).toBeInTheDocument()
    })
 }
}
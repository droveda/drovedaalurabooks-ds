import React from "react";
import { AbCampoTexto, CampoTextoProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },

} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />;

export const AbCampoTextoComponent = Template.bind({})

AbCampoTextoComponent.args = {
    label: 'Informe o seu nome',
} as CampoTextoProps

import React from "react";
import { AbInputQuantidade, AbInputQuantidadeProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbInputQuantidade',
    component: AbInputQuantidade,
    parameters: {
        actions: { argTypesRegex: '^on.*' }
    }
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args} />

export const Default = Template.bind({})


Default.args = {
    label: 'Quantity',
    onChange: (valor) => console.log(valor)
} as AbInputQuantidadeProps
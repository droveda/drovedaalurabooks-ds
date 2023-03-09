import React from "react";
import { AbGrupoOpcoes, AbGrupoOpcoesProp } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Default = Template.bind({})

Default.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'E-Book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mop'
        },
        {
            id: 2,
            titulo: 'Impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mop'
        },
        {
            id: 3,
            titulo: 'Impresso + E-Book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mop'
        },
    ]
} as AbGrupoOpcoesProp


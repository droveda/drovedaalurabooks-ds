import React from "react";
import { AbModal, AbModalProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbModal',
    component: AbModal,
    parameters: {
        actions: { argTypesRegex: '^on.*' }
    }
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args} />

export const Default = Template.bind({})


Default.args = {
    children: <div>aaa</div>,
    titulo: 'Modal Title',
    aberta: true,
    aoFechar: () => console.log('Modal fo fechada!')
} as AbModalProps
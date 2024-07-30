import { useState } from "react";

export default function useVisible() {
    const [visible, setVisible] = useState<'tab' | 'form'>('tab');

    const exibirTab = () => setVisible('tab');
    const exibirForm = () => setVisible('form');

    return {
        formVisible: visible === 'form',
        tabVisible: visible === 'tab',
        exibirTab,
        exibirForm,
    };
}

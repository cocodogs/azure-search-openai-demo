import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "鎌倉時代に幕府を実質的に支配していた人は誰ですか。",
        value: "鎌倉時代に幕府を実質的に支配していた人は誰ですか。"
    },
    { text: "鎌倉時代の源家2代目の紹介をしてください。", value: "鎌倉時代の源家2代目の紹介をしてください。" },
    { text: "源家の家臣の紹介をお願いします。", value: "源家の家臣の紹介をお願いします。" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

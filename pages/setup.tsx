import styles from '../styles/Setup.module.css'
import {ChangeEvent, useState} from 'react'
import splitLines from '../utils/splitLines'
import {useRouter} from 'next/router'

export default function Setup() {
    const [input, setInput] = useState('')
    const router = useRouter()

    return <div className={styles.container}>
        <p className={styles.title}>
            导入名单
        </p>
        <p className={styles.desc}>
            请在下方粘贴名单，一行一个名字
        </p>
        <div className={styles.input}>
            <textarea
                className={styles.inputBox}
                value={input} onChange={handleInput}
            />
        </div>
        <div className={styles.buttonContainer}>
            <a className={styles.button} onClick={done}>
                完成
            </a>
        </div>
    </div>

    function handleInput(e: ChangeEvent<HTMLTextAreaElement>) {
        setInput(e.target.value)
    }

    function done() {
        if (splitLines(input).length) {
            localStorage.setItem('names', input)
            router.replace('/')
        }
    }
}


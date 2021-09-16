import styles from '../styles/Setup.module.css'
import {ChangeEvent, useEffect, useState} from 'react'
import splitLines from '../utils/splitLines'
import {useRouter} from 'next/router'
import Head from 'next/head'

export default function Setup() {
    const [input, setInput] = useState('')
    const router = useRouter()

    useEffect(() => {
        const names = localStorage.getItem('names')
        names && setInput(names)
    }, [])

    return <div className={styles.container}>
        <Head>
            <title>名单配置</title>
        </Head>
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
                title="名单编辑框"
            />
        </div>
        <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={done} tabIndex={0} role="button">
                完成
            </div>
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


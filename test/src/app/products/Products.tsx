'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import styles from './Products.module.scss'
import Image from 'next/image'

export default function Products() {

    const pathname = usePathname()
    const params = useSearchParams()

    const {} = useRouter()

    return(
        <div className={styles.products}>
            Products
            <Image src="/next.svg" alt='image' width={200} height={50}/>
        </div>
    )
}
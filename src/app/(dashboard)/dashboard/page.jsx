'use client'

import {useSession} from "next-auth/react";

export default function Dashboard() {
    const {data: session} = useSession()
    if (!session) return null
    return (
        <>
            {session}
        </>
    )
}
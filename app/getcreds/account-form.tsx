'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient()

    const getProfile = useCallback(async () => {
        try {
            // setLoading(true)

            const { data, error, status } = await supabase
                .from('profiles')
                .select(`full_name, username, website, avatar_url`)
                .eq('id', user?.id)
                .single()

            if (error && status !== 406) {
                console.log(error)
                throw error
            }

        } catch (error) {
            // alert('Error loading user data!')
        } finally {
            // setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    return (
        <div className='inline'>
            {user?.email || 'Not logged in'}
        </div>
    )
}
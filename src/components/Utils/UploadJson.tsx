import { useCallback } from 'react'

type ImportJsonOptions = {
    onSuccess: (data: unknown) => void
    onError?: (error: Error) => void
}

export const useImportJson = () => {
    const importJson = useCallback(({ onSuccess, onError }: ImportJsonOptions) => {
        const handleFileChange = (event: Event) => {
            const input = event.target as HTMLInputElement
            const file = input.files?.[0]

            if (!file) {
                onError?.(new Error('No file selected'))
                return
            }

            const reader = new FileReader()

            reader.onload = (e) => {
                try {
                    const text = e.target?.result as string
                    const data = JSON.parse(text)
                    onSuccess(data)
                } catch (error) {
                    onError?.(error instanceof Error ? error : new Error('Invalid JSON'))
                } finally {
                    document.body.removeChild(input)
                }
            }

            reader.onerror = () => {
                onError?.(new Error('Error reading file'))
                document.body.removeChild(input)
            }

            reader.readAsText(file)
        }

        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json,application/json'
        input.style.display = 'none'

        input.addEventListener('change', handleFileChange, { once: true })

        const handleCancel = () => {
            window.removeEventListener('focus', handleCancel)
            setTimeout(() => {
                if (!input.files?.length && document.body.contains(input)) {
                    document.body.removeChild(input)
                }
            }, 1000)
        }

        window.addEventListener('focus', handleCancel, { once: true })

        document.body.appendChild(input)
        input.click()
    }, [])

    return importJson
}
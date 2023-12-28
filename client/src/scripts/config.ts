export const Config = {
    regions: {
        default: { name: "Temmie's server", address: "127.0.0.1:3000", https: false },
        
    },
    defaultRegion: "default"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, {
        readonly name: string
        readonly address: string
        readonly https: boolean
    }>
    readonly defaultRegion: string
}

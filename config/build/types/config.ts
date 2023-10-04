export interface IBuildPaths {
    entry: string
    html: string
    build: string
    src: string
}

export interface IBuildOptions {
    mode: 'development' | 'production',
    paths: IBuildPaths,
    port: number
}

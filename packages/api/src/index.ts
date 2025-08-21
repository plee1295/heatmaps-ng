import { WebGLRenderer } from 'webgl-renderer'

export async function createHeatmap(container: HTMLElement, options = {}) {
    const renderer = await WebGLRenderer.create(container, options)
    return {
        setData(points) { renderer.setData(points) },
        addPoints(points) { renderer.addPoints(points) },
        resize(w: number, h: number) { renderer.resize(w, h) },
        setOptions(opts) { renderer.setOptions(opts) },
        exportImage: () => renderer.exportImage(),
        destroy: () => renderer.destroy()
    }
}

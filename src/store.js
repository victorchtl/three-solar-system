import { create } from 'zustand'

export const useStore = create((set) => ({
  isOrbitLines: true,
  setIsOrbitLines: () =>set((state) => ({isOrbitLines: !state.isOrbitLines})),
  isCaptions: true,
  setIsCaptions: () =>set((state) => ({isCaptions: !state.isCaptions})),
  controlsTarget: [0,0,0],
  setControlsTarget: (newPosition) =>set({controlsTarget: newPosition})
}))
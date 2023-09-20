import { create } from 'zustand'

export const useStore = create((set) => ({

  planetScale: 14000,

  planetDistanceScale: 500000,

  isOverview: false,
  setIsOverview: () => set((state) => ({ isOverview: !state.isOverview })),

  isOrbitLines: true,
  setIsOrbitLines: () => set((state) => ({ isOrbitLines: !state.isOrbitLines })),

  isCaptions: true,
  setIsCaptions: () => set((state) => ({ isCaptions: !state.isCaptions })),

  controlsTarget: [0, 0, 0],
  setControlsTarget: (newPosition) => set({ controlsTarget: newPosition }),

  isInfosBox: true,
  setIsInfosBox: () => set((state) => ({ isInfosBox: !state.isInfosBox })),

  infosBoxData: 'earth',
  setInfosBoxData: (newData) => set({ infosBoxData: newData }),
}))
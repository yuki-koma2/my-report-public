import "@testing-library/jest-dom/vitest";

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  configurable: true,
  writable: true,
  value: IntersectionObserverMock
});

Object.defineProperty(window, "matchMedia", {
  configurable: true,
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false
  })
});

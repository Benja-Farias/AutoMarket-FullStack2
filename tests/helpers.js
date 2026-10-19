import * as React from 'react';
import * as TestUtils from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';

const act = React.act || TestUtils.act;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

export function renderInDom(elemento) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => root.render(elemento));
  return {
    container,
    cleanup() {
      act(() => root.unmount());
      container.remove();
    },
  };
}

export function typeInto(campo, valor) {
  const proto = campo instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
  act(() => {
    setter.call(campo, valor);
    campo.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

export function submitForm(formulario) {
  act(() => {
    formulario.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
}

export function click(elemento) {
  act(() => {
    elemento.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}

export function createFakeStorage(inicial = {}) {
  const datos = { ...inicial };
  return {
    getItem: jasmine.createSpy('getItem').and.callFake((k) => (k in datos ? datos[k] : null)),
    setItem: jasmine.createSpy('setItem').and.callFake((k, v) => {
      datos[k] = String(v);
    }),
    removeItem: jasmine.createSpy('removeItem').and.callFake((k) => {
      delete datos[k];
    }),
  };
}

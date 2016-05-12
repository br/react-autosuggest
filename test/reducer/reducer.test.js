import { expect } from 'chai';
import { reducer } from '../../src/AutosuggestContainer';

describe('reducer', () => {
  it('is a function', () => {
    expect(reducer).to.be.a('function');
  });

  it('returns initial state', () => {
    const result = reducer('initial state', {});
    expect(result).to.be.equal('initial state');
  });
})

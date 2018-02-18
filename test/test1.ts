
import {HelloWorld} from '../src/HelloWorld';
import 'mocha';
import { expect } from 'chai';

describe('sayHello', () => {

    it('should return hello', () => {
      const result = new HelloWorld().sayHello();
      expect(result).to.equal('Hello');
    });
  
  });
  
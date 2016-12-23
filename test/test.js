'use strict';

const should = require('chai').should();

require('../myindexof.js');
const main = require('../main.js').main;

describe('myIndexOf', function () {

  it('should be a method available on any string', function () {
    'hello world'.myIndexOf.should.be.a('function');
  });

  it('should return -1 if not found or empty string', function () {
    'hello world'.myIndexOf('a',0).should.eql(-1);
    ''.myIndexOf('a',0).should.eql(-1);
  });

  it(
    'should throw error if fromIndex is bigger than string size or negative',
    function () {
      (function () {'hello'.myIndexOf('h',10);}).should.throw(Error);
      (function () {'hello'.myIndexOf('h',-1);}).should.throw(Error);
    }
  );

  it('should return the position of searchValue', function () {
    'hello world'.myIndexOf('h',0).should.eql(0);
    'hello world'.myIndexOf('d',0).should.eql(10);
    'hello world'.myIndexOf('o',0).should.eql(4);
    'hello world'.myIndexOf('o',5).should.eql(7);
  });

});

describe('main', function () {

  it('should be a function', function () {
    main.should.be.a('function');
  });

  it('should return -1 if empty array', function () {
    main(0,[]).should.eql(-1);
  });

  it('should return the index where to split if has a solution', function () {
    main(5,[5,2,5,0,5,7,5]).should.eql(3); // even
    main(5,[5,2,5,0,5,7]).should.eql(3); // odd
    main(5,[5,2,5,5,5,7]).should.eql(2); // slighly asymetrical
    main(5,[5,5,5,5,5,7]).should.eql(1); // highly asymetrical
    main(7,[5,2,5,5,5,7]).should.eql(5); // 0-0 case
    main(5,[5,5,5,5,5,5]).should.eql(0); // All equal
    main(7,[5,5,5,5,5,5]).should.eql(0); // All non equal
  });

});

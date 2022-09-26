import Target from '../src/modules/target';
import hitsFixture from './fixtures/hits';

describe('Default test', () => {
  test('test should validation exeption', () => {
    expect(() => {
      new Target(20, 20, 'blah');
    }).toThrow('Vstupni hodnota targetR musí být číslo! Je blah');
  });

  test('test should hit input validation exception', () => {
    const target = new Target(20, 20, 10);
    expect(() => {
      target.hit(20, 'ww');
    }).toThrow('Vstupni hodnota MY musí být číslo! Je ww');
  });

  test('test should exception thrown, target zero or negative radius', () => {
    expect(() => {
      new Target(20, 20, 0);
    }).toThrow('Polomer musi byt vedsi nez 0! Je 0');

    expect(() => {
      new Target(20, 20, -1);
    }).toThrow('Polomer musi byt vedsi nez 0! Je -1');
  });

  test('test should hit', () => {
    const target = new Target(20, 20, 5);
    const hit = target.hit(20, 18);
    expect(hit).toBe(true);
  });

  test('test should hits', () => {
    const target = new Target(hitsFixture.target.x, hitsFixture.target.y, hitsFixture.target.r);

    hitsFixture.hits.forEach((hit) => {
      const exp = (hitsFixture.target.x - hit[0]) ** 2 + (hitsFixture.target.y - hit[1]) ** 2 < hitsFixture.target.r ** 2;

      expect(
        target.hit(hit[0], hit[1]),
      ).toBe(exp);
    });
  });
});

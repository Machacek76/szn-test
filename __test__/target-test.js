import Target from '../src/modules/target';
import hitsFixture from './fixtures/hits';

describe("Default test", () => {

  test('test should validation exeption', () => {
    expect(() => {
      new Target(20, 20, 'blah');
    }).toThrow('Vstupni hodnota targetR musí být číslo! Je blah');
  });

  test('test should hit input validation exception', () => {
    let target = new Target(20, 20, 10);
    console.log(target);
    expect(() => {
      target.hit(20, 'ww');
    }).toThrow('Vstupni hodnota MY musí být číslo! Je ww');
  });

  test('test should hit', () => {
    let target = new Target(20, 20, 5);
    let hit = target.hit(20, 18);
    expect(hit).toBe(true);
  });

  test('test should hits', () => {

      const target = new Target(hitsFixture.target.x, hitsFixture.target.y, hitsFixture.target.r);

      hitsFixture.hits.forEach((hit) => {

        let exp = (hitsFixture.target.x - hit[0]) ** 2 + (hitsFixture.target.y - hit[1]) ** 2 < hitsFixture.target.r ** 2;

        expect(
          target.hit(hit[0], hit[1])
        ).toBe(exp);

      });

  });

})

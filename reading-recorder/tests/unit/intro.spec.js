describe('Jestの基本', () => {
  beforeEach(() => {
    console.log(new Date().toLocaleDateString())
  })
  it('はじめてのテスト', () => {
    expect(1 + 1).toBe(2)
  })
})
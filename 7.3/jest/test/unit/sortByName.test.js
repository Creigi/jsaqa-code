const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Приключения Тома Сойера",
        "Приключения Тома Сойера",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Приключения Тома Сойера",
      "Приключения Тома Сойера",
    ]);
  });
});

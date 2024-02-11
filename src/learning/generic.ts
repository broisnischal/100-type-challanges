interface AnimalName {
  name: string;
}

interface HumanName {
  firstName: string;
  lastName: string;
}

export function getDisplayName<TItem extends AnimalName | HumanName>(
  item: TItem
): TItem extends AnimalName ? { animalName: string } : { humanName: string } {
  if ("name" in item) {
    return {
      animalName: item.name,
    };
  }
}

const ress = getDisplayName({
  //      ^?
  name: "cat",
});

const res = getDisplayName({
  //      ^?
  firstName: "adsf",
  lastName: "teaf",
});

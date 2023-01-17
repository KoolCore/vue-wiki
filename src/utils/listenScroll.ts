export default function getCurrentTitleIndex(doms: any) {
  const tops: number[] = []
  doms.forEach((d: any, i: number) => {
    const { top } = d.getBoundingClientRect()
    tops[i] = top
  })
  const cindex = indexOfSmallestPositive(tops)
  return cindex >= 0 ? cindex : doms.length - 1
}

function indexOfSmallestPositive(arr: number[]) {
  // create a variable to store the index of the smallest positive number
  let smallestPositiveIndex = -1
  // create a variable to store the smallest positive number
  let smallestPositive = Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < smallestPositive) {
      smallestPositive = arr[i]
      smallestPositiveIndex = i
    }
  }

  return smallestPositiveIndex
}

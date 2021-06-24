const gradeData = [
  {
    id: 1,
    name: "White Belt",
  },
  {
    id: 2,
    name: "Yellow Tag",
  },
  {
    id: 3,
    name: "Yellow Belt",
  },
];

const getGradesAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(gradeData), 600);
  });
};

const getGradeAsync = (id) => {
  return new Promise((resolve) => {
    const grade = gradeData.find((g) => g.id === id);
    setTimeout(() => resolve(grade), 600);
  });
};

export default {
  getGradesAsync,
  getGradeAsync,
};

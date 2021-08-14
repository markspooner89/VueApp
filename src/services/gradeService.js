import gradeData from "../data/grades.json";

const getGradesAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(gradeData), 300);
  });
};

const getGradeAsync = (id) => {
  return new Promise((resolve) => {
    const grade = gradeData.find((g) => g.id === id);
    setTimeout(() => resolve(grade), 300);
  });
};

export default {
  getGradesAsync,
  getGradeAsync,
};

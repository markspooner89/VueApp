const gradeData = [
    {
        "id": 1,
        "name": "White Belt"
    },
    {
        "id": 2,
        "name": "Yellow Tag"
    },
    {
        "id": 3,
        "name": "Yellow Belt"
    }
];

const getGrades = () => { 
    return gradeData;
};

const getGrade = (id) => { 
    return gradeData.find(g => g.id === id);
};

export default { 
    getGrades,
    getGrade
};
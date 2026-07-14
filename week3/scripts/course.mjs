const byuiCourse = {
    title: "Web Frontend Development I<br>WDD 231",
    sections: [
        { sectionNumber: 1, enrolled: 20, instructor: "Brother Standley" },
        { sectionNumber: 2, enrolled: 18, instructor: "Jaren Lamprecht" },
        { sectionNumber: 3, enrolled: 25, instructor: "Sister Kim Daley " }
    ],

    changeEnrollment(sectionNum, add = true) {
        const section = this.sections.find(sec => sec.sectionNumber === sectionNum);
        if (section) {
            if (add) {
                section.enrolled++;
            } else {
                section.enrolled--;
            }
        }
    }
};
export default byuiCourse;

function skillsMember() {
    var member = {
        name: 'John Doe',
        skills: ['JavaScript', 'HTML', 'CSS'],
        age: 25
    };
    
    for (var skill of member.skills) {
        console.log(skill);
    }
}
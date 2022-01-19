const solution = (id_list, report, k) => {
    const reportRecord = {}; // 신고 기록

    report.forEach(item => {
        const badGuy = item.split(' ')[1];
        const victim = item.split(' ')[0]; // 피해자

        reportRecord[badGuy] ?
            reportRecord[badGuy].includes(victim) || reportRecord[badGuy].push(victim) : reportRecord[badGuy] = [victim]
    });

    const whoReceiveMail = Object.values(reportRecord).reduce((acc, cur) => {
        if (cur.length < k) {
            return acc
        }

        return acc.concat(...cur)
    }, []);

    const receiveCount = id_list.map(item =>
        whoReceiveMail.filter(a =>
            a === item).length
    )

    return receiveCount
}

console.log(solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2,
))

    // reportRecord = {
    //   frodo: [ 'muzi', 'apeach' ],
    //   neo: [ 'frodo', 'muzi' ],
    //   muzi: [ 'apeach' ]
    // }

    // whoReceiveMail = [ 'muzi', 'apeach', 'frodo', 'muzi' ]
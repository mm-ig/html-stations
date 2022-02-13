async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList);
  console.log(result);
  return await result
}

function test(data) {
   return new Promise(resolve => {
    setTimeout(() => {
      const full_name = data.map(dt => {
        return name = {full_name : dt.family_name + " " + dt.first_name};
      });
      //console.log(full_name);
      resolve(full_name);
    }, 3000);
  });
}

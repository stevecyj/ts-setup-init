// 介面實作，implements
interface UserInterface {
  // 屬性
  id: number;
  name: string;
  age: number;
  addres: string;

  // 會員功能
  add: (data: any) => void;
  update: (id: number) => boolean;
  delete: (id: number) => boolean;
}

class LiveUser implements UserInterface {
  // 屬性
  id: number;
  name: string;
  age: number;
  addres: string;

  // 會員功能
  add(data: any) {
    console.log('add', data);
  }
  update(id: number) {
    console.log('update', id);
    return true;
  }
  delete(id: number) {
    console.log('delete', id);
    return true;
  }

  // 額外新增的功能
  postVideo() {}
  deleteVideo() {}
}

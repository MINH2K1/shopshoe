// function IncreaseCartQuantity(id=1) {
  //   setCartItem((currItem) => {
  //       console.log(currItem);
  //     if ((currItem.filter((item) => item.id === id)) == null) {
  //       return [...currItem, { id, quantity: 1 }];
  //     } else {
  //       currItem.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else return item;
  //       });
  //     }
  //   });
  // };
  // var total = cartList.reduce((totail, item) => {
  //   return (totail = totail + item?.price * item?.quantity);
  // }, 0);
//   <div>
//   Tổng: <span style={{ fontSize: "25px", color: "red" }}>{total} đ</span>{" "}
// </div>
//   function DecreaseCartQuantity(id) {
//     setCartItem((currItem) => {
//       if (currItem.find((item) => item.id === id)?.quantity === 1) {
//         return currItem.filter((item) => item.id !== id);
//       } else {
//         currItem.map((item) => {
//           if (item.id === id) return { ...item, quantity: item.quantity - 1 };
//           else 
//           return item;
//         });
//       }
//     });
//   }
//   function RemoveCartQuantity(id) {
//     setCartItem((currItem) => {
//       if (currItem.filter((item) => item.id === id)) {
//         return currItem.filter((item) => item.id !== id);
//       }
//     });
//   }
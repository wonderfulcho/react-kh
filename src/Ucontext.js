/* 
    일반적으로 React 데이터는 위에서 아래 (부모에서 자식) props를 통해서 전달
    여러 컴포넌트에 전달해줘야하는 prop 경우 과정이 번거로울 수 있음
    context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유 할 수 있게 함

    context를 사용하면 중간에 있는 element에게 props 넘겨주지 않아도 됨
    원하는 값을 컴포넌트 트리 깊숙한 곳 까지 보낼 수 있음.

    context를 사용하면 컴포넌트를 재사용하기 어려워짐
*/

import { createContext } from 'react';
export const AppContext = createContext();

function Children() {
    return (
        <AppContext.Consumer>
            {(user) => (
                <div>
                    <h3>AppContext 존재하는 값의 name은 {user.name} 입니다.</h3>
                    <h3>AppContext 존재하는 값의 job은 {user.job} 입니다.</h3><br />
                </div>
            )}
        </AppContext.Consumer>
    )
}




export default function Ucontext() {
    const user = {
        name: '김경난',
        job: '강사'
    };
    return (
        <AppContext.Provider value={user}>
            <Children />
        </AppContext.Provider>
    )
}
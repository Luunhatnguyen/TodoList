import React from 'react';

function Page({postsPerPage, totalPosts,paginate, currentPage, handlePrev, handleNext}) {


    const pageNumbers = [];
    console.log(totalPosts)

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }



  return (
  
          <div className="pagination">
            <a onClick={handlePrev} className="number-page">Prev</a>
                {
                    pageNumbers.map(number => (
                            <a onClick={()=>paginate(number)} key={number} className={currentPage===number ?
                             'number-page active' : 'number-page'}>
                                {number}
                            </a>
                    ))  
                }
            <a onClick={handleNext} className="number-page">Next</a>
          </div>

  )
}

export default Page;
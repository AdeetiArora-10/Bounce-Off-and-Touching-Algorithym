function touch(m_rect,f_rect){
    if(m_rect.x - f_rect.x < f_rect.width/2 + m_rect.width/2 && 
      f_rect.x - m_rect.x < m_rect.width/2 + f_rect.width/2 &&
      m_rect.y - f_rect.y < f_rect.width/2 + m_rect.width/2 &&
      f_rect.y - m_rect.y < f_rect.width/2 + m_rect.width/2){
   
     m_rect.shapeColor="cyan";
     f_rect.shapeColor="purple";
   }
   else{
     f_rect.shapeColor="pink";
     m_rect.shapeColor="blue";
   }
  
  }
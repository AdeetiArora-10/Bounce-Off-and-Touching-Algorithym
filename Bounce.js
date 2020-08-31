function Bounce(m_rect,f_rect){

    if(m_rect.x - f_rect.x < f_rect.width/2 + m_rect.width/2 && 
      f_rect.x - m_rect.x < m_rect.width/2 + f_rect.width/2 &&
      m_rect.y - f_rect.y < f_rect.width/2 + m_rect.width/2 &&
      f_rect.y - m_rect.y < f_rect.width/2 + m_rect.width/2){
    
return true;
    
//do not code after return
    }
      else{

      return false;
      }
    }
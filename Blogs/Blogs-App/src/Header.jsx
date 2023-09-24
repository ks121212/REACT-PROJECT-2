import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary width-100px">
      <Container>
        <Navbar.Brand href="/KsBlogs">
        <img width="121" height="53" src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"
         className="attachment-full size-full wp-image-9465" alt="Guvi-blog-logo"/>
        </Navbar.Brand>
        <div>
        <div className='col-6'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="https://www.guvi.in/courses/?current_tab=paidcourse" target='_blank'>Courses</Nav.Link>
            <NavDropdown title="Live Classes" id="basic-nav-dropdown" className='text' >
              <NavDropdown.Item href="https://www.guvi.in/zen-class/full-stack-development-course/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=fsd" target='_blank'
              className='overflow'> 
              Full-Stack Development Program (FSD)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.guvi.in/zen-class/data-science-course/" target='_blank'
              className='overflow'>
              IIT-M Advanced Programming & Data Science Program
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.guvi.in/zen-class/automation-testing-course/" target='_blank'
              className='overflow'>
                Automation & Testing Program</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Practice" id="basic-nav-dropdown" className='text'>
              <NavDropdown.Item href="https://www.guvi.in/code-kata/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=code_kata" target='_blank' className='overflow'> 
              Codekata</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.guvi.in/webkata/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=webkata" target='_blank' className='overflow'>
              Webkata
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.guvi.in/ide/?id=64c9d10395a62" target='_blank' className='overflow'>
               IDE - Online Compiler</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resourse" id="basic-nav-dropdown" className='text'>
              <NavDropdown.Item href="https://www.guvi.in/rewards/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=rewards" target='_blank' className='overflow'> 
              Reward</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.guvi.in/referral/5/ai-for-india-2-0" target='_blank' className='overflow'>
              Refferal
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://forum.guvi.in/" target='_blank' className='overflow'>
               Forum Support</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="/Blogs">
               Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Our Product" id="basic-nav-dropdown" className='text'>
              <NavDropdown.Item href="https://www.hackerkid.org/?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=hackerkid" target='_blank' className='overflow'> 
              HackerKid</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.guvi.in/mlp/GUVI-for-corporates?utm_source=blog&utm_medium=top_nav&utm_campaign=main_menu_top&utm_content=guvi_for_corp" target='_blank' className='overflow'>
              Corporates
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
        </div>
      </Container>
      
    </Navbar>
    
    
  );
}

export default Header;
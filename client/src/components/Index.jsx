import React from 'react'
import { Content, Navbar } from 'bloomer'
import { NavbarBrand } from 'bloomer/lib/components/Navbar/NavbarBrand';

export default function index() {
    return (
        <div>
            <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                <NavbarBrand></NavbarBrand>
            </Navbar>


            <Content>
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius, voluptas quo tempora corrupti hic corporis aperiam sapiente nam, animi cumque, aspernatur vero nostrum deleniti. Culpa possimus ipsa fugiat id!</p>
            </Content>
        </div>

    )
}

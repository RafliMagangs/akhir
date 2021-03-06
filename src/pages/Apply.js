import React from 'react'
import '../Apply.css'
import {useRef} from 'react'
import ReactDOM from 'react-dom'
import Facebook from '../icon/Facebook.png'
import Instagram from '../icon/Instagram.png'
import Twiter from '../icon/Twiter.png'
import Berasil from '../asset/berasil.png'

function Apply() {
    const inputref = useRef(null);
    const inputref1 = useRef(null);
    const inputref2 = useRef(null);

    function block1(){
        inputref2.current.style.display="none"
        inputref1.current.style.display="none"
        inputref.current.style.display="block"
    }
    function block2(){
        inputref.current.style.display="none"
        inputref2.current.style.display="none"
        inputref1.current.style.display="block"
    }
    function block3(){
        inputref1.current.style.display="none"
        inputref.current.style.display="none"
        inputref2.current.style.display="block"
    }

    return (
        <div className = "body-apply">
            <div className="containner-apply">
                {/* <!-- Navbar --> */}
                {/* <!-- main --> */}
                <main className="main-apply">
                {/* <!-- content-top --> */}
                    <div className="content-top-apply">
                        <div className="background-apply"></div>
                        <div className="document-user-apply">
                            <div className="img-profil-apply"></div>                                      
                            <div className="name-apply">
                                    <h3>PT.Pertamina</h3>
                                    <h6>Industri Oil, chemical gas</h6>
                                </div>
                                <div className="list-addres-apply">
                                    <div className="addres1-apply">
                                        <span>Solo,Jawa Tengah</span>
                                        <span>081239900323</span>
                                        <span>pertamina@gmail.com</span>
                                    </div>
                                    <div className="addres2-apply">
                                        <span><img src={Facebook} alt=""/> Username Sosial Media</span>
                                        <span><img src={Instagram} alt=""/> Username Sosial Media</span>
                                        <span><img src={Twiter} alt=""/> Username Sosial Media</span>
                                    </div>    
                                </div>
                        </div>
                    </div>
                    {/* <!-- content-bot --> */}
                    <div className="content-bot-apply">
                    {/* <!-- menu-com --> */}
                    <div className="menu1">
                        <button className="menu" onClick={block1}><b>About</b> </button>
                        <button className="menu" onClick={block2}><b>Jobs</b> </button>
                        <button className="menu" onClick={block3}><b>News</b> </button>
                    </div>
                    {/* <!-- list-item-menu --> */}
                    {/* <!-- item1 --> */}
                    <div id="About" className="w3-container city" ref={inputref}>
                        {/* <!-- about --> */}
                        <h2><b>About</b></h2>
                        <br/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos quae dolorem tenetur. Velit, molestias! Rem aperiam deleniti veniam iusto corporis, ratione error esse numquam laboriosam modi, unde dolore maiores..</p>
                        {/* <!-- about-com --> */}
                        <div className="des-com">
                        <div className="item-des-com">
                            <span>Bidang</span>
                            <span>Berdiri</span>
                            <span>Website</span>
                        </div>
                        <div className="item-des-com">
                            <span>Oil</span>
                            <span>2005</span>
                            <span><a href="">www.pertamina.com</a></span>
                        </div>
                        </div>
                    </div>
                    {/* <!-- item2 --> */}
                    <div id="Jobs" className="w3-container city" style={{display:"none"}} ref={inputref1}>
                        {/* <!-- jobs --> */}
                        <h2><b>Jobs</b></h2>
                        <br/>
                        {/* <!-- acordion-jobs --> */}
                        <div className="accordion " id="accordionExample" >
                        <div className="accordion-item border-0 uwu" style={{borderRadius: "20px"}}>
                            {/* <!-- title-job --> */}
                            <div className="accordion-body jobs-apply" >
                            <div className="pic-com">
                                <img src="https://source.unsplash.com/random/100x100" alt="" />                    
                            </div>
                            <div className="title-jobs-apply ">
                                <h4>Digital Marketing </h4>
                                <p>Dibutuhkan manager perusahaan cabang Jakarta, dengan syarat:</p>                    
                            </div>
                            </div>
                            {/* <!-- condition-acor --> */}
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h4><b>Syarat</b></h4>
                                <ul>
                                <li>Pendidikan minimal S1</li>
                                <li>Pengalaman Kerja minimal 4 Tahun</li>
                                <li>Umur minimal 25 Tahun</li>
                                <li>Melampirkan fotokopi ijazah,ktp,dan sertifikat PKL</li>
                                </ul>
                                <div className="flex-center">
                                <button className="buton-apply" data-bs-toggle="modal" data-bs-target="#exampleModal">APPLY</button> 
                                </div>
                            </div>
                            </div>
                            {/* <!-- button-acor --> */}
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed button-apply" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTOne">
                            <b>Show More</b> 
                            </button>
                            </h2>
                        </div>
                        {/* <!-- title-job --> */}
                        <div className="accordion-item border-0 uwu">
                            <div className="accordion-body jobs-apply" >
                            <div className="pic-com">
                                <img src="https://source.unsplash.com/random/100x100" alt="" />                    
                            </div>
                            <div className="title-jobs-apply">
                                <h4>Digital Marketing </h4>
                                <p>Dibutuhkan manager perusahaan cabang Jakarta, dengan syarat:</p>                    
                            </div>
                            </div>
                            {/* <!-- condition-acor --> */}
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h4><b>Syarat</b></h4>
                                <ul>
                                <li>Pendidikan minimal S1</li>
                                <li>Pengalaman Kerja minimal 4 Tahun</li>
                                <li>Umur minimal 25 Tahun</li>
                                <li>Melampirkan fotokopi ijazah,ktp,dan sertifikat PKL</li>
                                </ul>
                                <div className="flex-center">
                                <button className="buton-apply" data-bs-toggle="modal" data-bs-target="#exampleModal">APPLY</button></div>                    
                                </div>
                            </div>
                            {/* <!-- button-acor --> */}
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed button-apply" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                                <b>Show More</b>
                            </button>
                            </h2>
                        </div>
                        {/* <!-- title-jobs --> */}
                        <div className="accordion-item border-0 uwu" style={{borderRadius: "20px"}}>
                            <div className="accordion-body jobs-apply" >
                            <div className="pic-com">
                                <img src="https://source.unsplash.com/random/100x100" alt="" />                    
                            </div>
                            <div className="title-jobs-apply">
                                <h4>Digital Marketing </h4>
                                <p>Dibutuhkan manager perusahaan cabang Jakarta, dengan syarat:</p>                    
                            </div>
                            </div>
                            {/* <!-- contition-acor --> */}
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <h4><b>Syarat</b></h4>
                                <ul>
                                <li>Pendidikan minimal S1</li>
                                <li>Pengalaman Kerja minimal 4 Tahun</li>
                                <li>Umur minimal 25 Tahun</li>
                                <li>Melampirkan fotokopi ijazah,ktp,dan sertifikat PKL</li>
                                </ul>
                                <div className="flex-center">
                                <button className="buton-apply"  data-bs-toggle="modal" data-bs-target="#exampleModal" >APPLY</button></div>
                                </div>
                            </div>
                            {/* <!-- button-acor --> */}
                            <h2 className="accordion-header" id="headingThree">
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal"className="accordion-button collapsed button-apply" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b>Show More</b>
                            </button>
                            </h2>
                        </div>
                        </div>
                        {/* <!-- Modal --> */}
                        <div className="modal fade p-6 " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" id = "cont-pop">
                            <div className="modal-content p-4 " id="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit Profil</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ">
                                <button type="button" className="btn btn-outline-primary">Primary</button>
                            </div>
                            <div className="modal-footer">
                                <button id="bt-cl" type="button"  data-bs-dismiss="modal">Cancel</button>
                                <button id="bt-in" type="button" >Save</button>
                            </div>
                            </div>
                        </div>
                        </div>
                            </div>
                    {/* <!-- item3 --> */}
                    <div id="News" className="w3-container city" style={{display:"none"}} ref={inputref2}>
                        {/* <!-- news --> */}
                        <h2><b>News</b></h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eos sapiente dicta. Sunt hic illum dicta ducimus consectetur, voluptatem error nostrum et cum distinctio voluptatibus suscipit temporibus sapiente totam tenetur!</p>
                    </div>
                    
                    </div>
                </main>
            </div>        

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" >
                        <div class="modal-content"style={{height:"600px",borderRadius:"20px"}}>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Upload file sesuai syarat</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex flex-column align-items-center" style={{rowGap:"20px"}}>
                            <div className= "area-file-apply"></div>                            
                            <button type="button" class="btn btn-outline-primary"><input type="file" style={{position:"absolute",width:"90px",opacity:"0",top:"335px",left:"200px"}}></input>pilih file</button>
                        </div>
                        <div class="modal-footer d-flex justify-content-between" style={{color:"red"}}>
                            <p><b>Pastikan anda sudah mengisi semua syarat <br/>dan ketentuan dengan benar !</b></p>                        
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal"><button id="bt-cl" type="button"  data-bs-dismiss="modal" style={{left:"380px",top:"540px",position:"absolute",opacity:"0"}}>upload</button>Upload</button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Button trigger modal --> */}
               

                 {/* <!-- Modal --> */}
             <div class="modal fade " id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog  modal-lg" >
                    <div class="modal-content" style={{borderRadius:"20px"}}>                        
                        <div class="modal-body d-flex flex-column align-items-center">
                            <h3 class="text-center" style={{color:"#0497E1"}}><b> Berhasil apply ke perusahaan!</b></h3>
                            <img className="mt-5" src = {Berasil}></img>
                            <p  className="mt-3" style={{color:"#0497E1"}}><b>Selamat data telah berhasil diupload</b></p>
                            <button type="button" class="btn btn-primary mt-4" data-bs-dismiss="modal">Selesai</button>
                        </div>                    
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Apply

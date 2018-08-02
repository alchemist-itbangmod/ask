import React from 'react'
import { Card, Container, Row, Col, CardBody, CardHeader, CardTitle } from 'reactstrap'
import { CustomCardBody } from './styled'

class OrgHomePage extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Card className='mt-4 mb-4'>
              <CardHeader tag='h4'className='p-3 pl-4'>{`ASK #3.0 Organizer`}</CardHeader>
              <CardBody>
                <CardTitle tag='h2' className='text-center'>How to use ASK #3.0 Organizer</CardTitle>
                <CustomCardBody>
                  <h5>1. Go to Website ASK #3.0 Organizer</h5><br />
                  <h5>2. Log in Facebook</h5>
                  <p>ล็อกอิน ASK #3.0 Organizer ด้วยเฟสบุ้คจากปุ่มล็อกอินด้านบนขวา</p><br />
                  <h5>3. Show all rooms</h5>
                  <p>เมื่อล็อกอินแล้วจะเห็นหน้า Home page ของตนเอง ซึ่งจะเห็นห้องที่เราสร้างทั้งหมด</p>
                  <p>แต่หากยังไม่เคยสร้างห้องจะเห็นเพียงปุ่มสำหรับเปิดการ์ด Create Room บน Home page</p><br />
                  <h5>4. Create a room</h5>
                  <p>หากต้องการสร้างห้องให้ กดปุ่ม Create Room แล้วจะเผยการ์ด Create Room ที่มีช่องสำหรับตั้งชื่อห้อง แล้วกด Create เป็นอันเสร็จการสร้างห้อง</p>
                  <p>ห้องที่สร้างทั้งหมดจะอยู่ด้านล่างของปุ่ม Create Room โดยห้องที่สร้างใหม่สุดจะอยู่บนสุด</p><br />
                  <h5>5. Manage a room</h5>
                  <p>ในการ์ดห้อง แต่ละห้องจะมีปุ่ม Manage และ Present อยู่</p>
                  <p>เมื่อกด Manage จะเข้าไปที่ monitor สำหรับห้องนั้น โดยจะเห็น 3 tabs ได้แก่ Question, Setting and Analyst</p>
                  <p>Tab แรก Question จะมี 2 ฝั่ง ฝั่งซ้ายคือคำถามที่เข้ามาทั้งหมด ฝั่งขวาคือคำถามที่จะแสดงขึ้นจอ</p>
                  <p>ปุ่ม Refresh ฝั่ง Question ด้านซ้าย มีไว้เพื่อดึงคำถามที่ได้รับเข้ามาใหม่ ซึ่งจะแจ้งทุกๆ 10 นาที เมื่อกดแล้วคำถามจะเข้ามาในช่อง Question ฝั่งซ้าย</p>
                  <p>กดปุ่มถังขยะเพื่อลบคำถามนั้นออกจากห้องไปเลย</p><br />
                  <h5>5. Present questions</h5>
                  <p>เมื่อต้องการแสดงคำถามบนหน้าจอให้เลือกคำถามจากฝั่งซ้าย จะขึ้นสีที่คำถามด้านซ้ายและคำถามนั้นจะไปแสดงที่ Selected ด้านขวาด้วย หากไม่เอาก็กดที่คำถามที่ขึ้นีเพื่อให้ออกจาก Selected และกด Refresh เพื่อนำคำถามในช่อง Selected ทั้งหมดในตอนนั้นขึ้นแสดงบนหน้าจอ และคำถามที่ขึ้นบนจอจะโชว์สัญลักษณ์ Live ด้านขวา</p>
                  <p>เมื่อจะเลือกคำถามขึ้นแสดงเพิ่มต้องเลือกจากฝั่ง Question ด้านซ้ายให้เข้ามาใน Selected ใหม่ โดยที่คำถามที่ขึ้นจออยู่จะยังโชว์สัญลักษณ์ Live แต่คำถามที่เตรียมจะแสดงบนจอจะไม่มีสัญลักษณ์ และเมื่อกด Refresh ฝั่ง Select อีกครั้ง คำถามที่เลือกเข้ามาใหม่จะขึ้นแสดงแทนคำถามที่อยู่บนจอทีแรก และคำถามที่ขึ้นไปแล้วจะหายไปจากช่อง Selected</p>
                  <br />
                  <h5>7. Setting</h5>
                  <p>Tab ที่สอง Setting มีเพื่อแก้ไขข้อมูลของห้องนั้นๆ สิ่งที่สามารถแก้ไขได้คือ ชื่อห้อง การเปิด-ปิดรับคำถาม(ซึ่งค่าเริ่มต้นหลังจากสร้างห้องคือปิดรับคำถาม ต้องมาเปลี่ยนให้เป็นเปิดรับคำถามก่อนถึงจะสามารถส่งคำถามเข้ามาได้) และสามารถเปลี่ยน Theme ได้ เมื่อแก้ไขเสร็จเรียบร้อยต้องกด Update เพื่อบันทึกข้อมูลใหม่</p><br />
                  <h5>8. Export data to Excel</h5>
                  <p>Tab ที่สาม Analyst จะแสดงข้อมูลจำนวนผู้ที่เข้าห้องมาทั้งหมด คำถามทั้งหมด และคำถามที่ขึ้นแสดงบนจอ โดยข้อมูลพวกนี้สามารถกด  Export ออกมาเป็นเอกสาร Excel ได้</p><br />
                  <h5>9. Presentation windows</h5>
                  <p>ที่หน้า Home page ในการ์ดห้อง ปุ่ม Present คือห้องที่มีไว้สำหรับเปิดโชว์บนจอแสดงผล โดยเข้ามาครั้งแรกจะแสดง PIN ของห้องนั้นให้ผู้ใช้งานเข้าห้องนั้นๆ มาเพื่อใส่ชื่อและส่งคำถาม แต่เมื่อแสดงคำถามบนหน้าจอ จะเห็นเพียงคำถามขึ้นที่แสดงเต็มหน้าจอเท่านั้น</p>
                </CustomCardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default OrgHomePage

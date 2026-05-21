import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 * 지도와 대중교통, 자가용 이용 방법을 안내합니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      {/* 지도 및 주소 섹션 */}
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      {/* 대중교통 및 자가용 안내 섹션 */}
      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용 시
            <br />
            지하철 4호선 <b>명동역 3번출구</b> 나와서
            <br />
            → 퍼시픽호텔 우측길로 60m
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 명동역: 104, 105, 421, 463, 507, 604, 7011
            <br />
            하차 후 이하 위와 동일합니다.
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>라루체 웨딩</b> 검색
            <br />
            - 주차 요금은 ???? 무료입니다.
          </div>
          <div />
          <div className="content">
            <b>
              ※ 시청 부근 시위가 있을 시 차량이 막힐 수 있으니 유의바랍니다.
            </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}

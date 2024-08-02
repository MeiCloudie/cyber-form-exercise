import { Table, Tag } from "antd"
import ButtonCustom from "./ButtonCustom"

const TableNhanVien = ({
  data,
  handleDeleteNhanVien,
  handleGetInforNhanVien,
}) => {
  const columns = [
    {
      title: "MSNV",
      dataIndex: "msnv",
      key: "msnv",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Giới tính",
      key: "gioiTinh",
      dataIndex: "gioiTinh",
      render: (text, record, index) => {
        return <Tag color={text === "Nam" ? "magenta" : "geekblue"}>{text}</Tag>
      },
    },
    {
      title: "Hành động",
      key: "hanhDong",
      render: (text, record, index) => {
        return (
          <>
            <ButtonCustom
              onClick={() => handleDeleteNhanVien(record.msnv)}
              content={"Xoá"}
              bgColor="bg-red-500"
            />
            <ButtonCustom
              onClick={() => handleGetInforNhanVien(record)}
              content={"Sửa"}
              bgColor="bg-purple-500"
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="mt-10">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableNhanVien

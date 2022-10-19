import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { InputContact } from "../components/input";
import { BiFilterAlt } from "react-icons/bi";
import CustomButton from "../components/Custombutton";
import CustomDataTable from "../components/DataTable/CustomDataTable";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  .iconwrapper {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .iconwrapper:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
const Edit = ({ onClickHandle }) => {
  return (
    <ActionContainer onClick={() => onClickHandle()}>
      <div className="iconwrapper">
        <CiEdit color="black" fontSize={"1.5rem"} />
      </div>
    </ActionContainer>
  );
};
const Delete = ({ onClickHandle }) => {
  return (
    <ActionContainer onClick={() => onClickHandle()}>
      <div className="iconwrapper">
        <MdDelete color="red" fontSize={"1.5rem"} />
      </div>
    </ActionContainer>
  );
};

const rows = [
  {
    Name: "Neil",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Neil",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Neil",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Amstrong",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Ali",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Haider",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Neil",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Neil",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
  {
    Name: "Neil",
    Email: "Neil@fifthtought.com",
    Phone: "032-1332-0999",
    Tag: "Administrator",
  },
];

const columns = [
  {
    name: "Name",
    selector: (row) => row.Name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.Email,
  },
  {
    name: "Phone",
    selector: (row) => row.Phone,
  },
  {
    name: "Tag",
    selector: (row) => row.Tag,
  },
  {
    name: "Edit",
    cell: (row) => <Edit onClickHandle={() => handleEdit(row.Name)} />,
  },

  {
    name: "Delete",
    cell: (row) => <Delete onClickHandle={() => handleDelete(row.Name)} />,
  },
];

const handleEdit = (id) => {
  alert("Edit " + id);
};
const handleDelete = (id) => {
  alert("Delete: " + id);
};
const WorkforceContainer = styled.div`
  width: 100%;
  height: 100%;
  .body {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .workforcewrapper {
      width: 80%;
      height: calc(100% - 60px);
      .options {
        width: 60%;
      }
    }
  }
`;
const Workforce = () => {
  const [search, setSearch] = useState("");
  const [filterResults, setFilterResults] = useState(rows);

  const filter = () => {
    const result = rows.filter((list) => {
      return list.Name.toLowerCase().match(search.toLowerCase());
    });
    setFilterResults(result);
  };
  return (
    <WorkforceContainer>
      <div className="body">
        <div className="workforcewrapper">
          <h1>Workforce</h1>
          <Row>
            <Col xs={6} md={4}>
              <InputContact
                placeholder={`Search`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col>
              <CustomButton
                type={"normal textnormal"}
                width="120px"
                height="40px"
                onClick={() => {
                  filter();
                }}
                // onClick={() => setUploadCSV_Modal(true)}
              >
                <BiFilterAlt /> Filter
              </CustomButton>
            </Col>
          </Row>
          <CustomDataTable column={columns} row={filterResults} />
        </div>
      </div>
    </WorkforceContainer>
  );
};

export default Workforce;

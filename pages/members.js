// pages/members.js
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import URLs from '../urls'; // 引入 URLs 配置

const fetchMembers = async (page) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`);
  return response.data;
};

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [memberId, setMemberId] = useState('');
  const [memberName, setMemberName] = useState('');
  const tableContainerRef = useRef(null);

  useEffect(() => {
    loadMoreMembers();
  }, []);

  const loadMoreMembers = async () => {
    if (loading) return; // 避免重複加載
    setLoading(true);
    const newMembers = await fetchMembers(page);
    setMembers((prevMembers) => [...prevMembers, ...newMembers]);
    setPage((prevPage) => prevPage + 1);
    setLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = tableContainerRef.current;
    // 當滾動位置距離底部 10px 以內時，將觸發加載更多數據的操作。
    if (scrollHeight - scrollTop <= clientHeight + 10) {
      loadMoreMembers();
    }
  };

  useEffect(() => {
    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [members, loading]);

  const handleSearch = () => {
    // 在這裡可以根據 memberId 和 memberName 進行過濾和查詢
  };

  return (
    <Container>
      <h1>查詢會員</h1>
      <TextField
        label="會員ID"
        variant="outlined"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <TextField
        label="會員名"
        variant="outlined"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        查詢
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '2rem', maxHeight: '400px', overflow: 'auto' }} ref={tableContainerRef}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>會員ID</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && <p>加載中...</p>}
    </Container>
  );
};

export default Members;

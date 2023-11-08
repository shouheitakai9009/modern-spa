/**
 * Vitestを使用するためのテストコンポーネント
 *
 * テストする技術スタック
 * - Recoil
 * - React Query
 *
 * テスト手法
 * - ユニットテスト（vitest）
 * - UIテスト（ストーリーブック（vitest + storybook CSF3.0））
 *
 * コンポーネント概要
 * 本を管理するためのCRUDを行います。初期値をRQからフェッチし画面に表示します。
 * また、Recoilのグローバルステートを使用して、入力状態を保持します。
 * 画面上部には、本のタイトルを入力するフォームがあります。
 * 画面下部には、本の一覧が表示されます。
 * 本の一覧は文字列の部分一致でフィルタリングできます。
 */

import {
  Box,
  Button,
  Dialog,
  Flex,
  TextField,
  Text,
  Table,
  IconButton,
  Heading,
} from "@radix-ui/themes";
import { BookKey, Trash2 } from "lucide-react";
import { useTest } from "./useTest";

export const TestComponent = () => {
  const {
    newBook,
    setNewBook,
    filteringBooks,
    searchText,
    setSearchText,
    onDelete,
    onAdd,
  } = useTest();
  return (
    <Box py="8">
      {/* 新規追加ボタン */}
      {/* 本を追加するためのダイアログ */}
      <Dialog.Root>
        <Dialog.Trigger>
          <Flex justify="between" align="center" mb="4">
            <Heading size="5" color="purple">
              Your favorite books
            </Heading>
            <Button>Add a new book</Button>
          </Flex>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Add a new book</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            You could add a book you like to your list.
          </Dialog.Description>

          <Flex direction="column" gap="3" data-testid="book-dialog">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Book title
              </Text>
              <TextField.Input
                value={newBook.title}
                onChange={(e) =>
                  setNewBook({ ...newBook, title: e.target.value })
                }
                placeholder="Enter your favorite book name"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Book author
              </Text>
              <TextField.Input
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
                placeholder="Enter an author of the book"
              />
            </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button color="amber" onClick={onAdd}>
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
      {/* 検索フィールド */}
      <TextField.Root mb="4">
        <TextField.Slot>
          <BookKey size="18" />
        </TextField.Slot>
        <TextField.Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="2"
          placeholder="Search books you like"
        />
      </TextField.Root>
      {/* 本一覧フィールド */}
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Book title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteringBooks.map((book, key) => (
            <Table.Row key={key}>
              <Table.RowHeaderCell>{book.title}</Table.RowHeaderCell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>
                <IconButton
                  color="gray"
                  variant="ghost"
                  onClick={() => onDelete(book.title)}
                >
                  <Trash2 size="18" />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

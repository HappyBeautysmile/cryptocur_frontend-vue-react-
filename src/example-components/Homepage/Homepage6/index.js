import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  InputAdornment,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  TextField
} from '@material-ui/core';

import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

export default function LivePreviewExample() {
  return (
    <>
      <div className="bg-white pb-5 pt-0 pt-md-5 rounded">
        <Container className="pt-0 pt-xl-5">
          <Grid container spacing={6}>
            <Grid item xl={7} className="d-flex align-items-center">
              <div className="w-100">
                <Grid container spacing={6} className="d-none d-md-flex mt-3">
                  <Grid item md={4}>
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Services
                      </h6>
                      <List
                        component="div"
                        className="nav-transparent-alt flex-column">
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          Products
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          Services
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          About us
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        Support
                      </h6>
                      <List
                        component="div"
                        className="nav-transparent-alt flex-column">
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          Support center
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          Affiliates
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          Contact us
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="pl-0 pl-lg-3">
                      <h6 className="text-black font-weight-bold mb-3">
                        UI Themes
                      </h6>
                      <List
                        component="div"
                        className="nav-transparent-alt flex-column">
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          React themes
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          HTML5 themes
                        </ListItem>
                        <ListItem
                          component="a"
                          button
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="px-0 py-1 text-black-50">
                          Angular themes
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xl={5} className="d-flex align-items-center">
              <div className="w-100 mb-4 mb-md-0">
                <Card className="border-0 bg-deep-sky mt-5 mt-xl-0 card-box">
                  <CardContent>
                    <div className="text-black">
                      <h1 className="font-size-xl mb-2 text-white font-weight-bold">
                        Newsletter Subscribe
                      </h1>
                      <p className="font-size-md mb-4 text-white-50">
                        Stay up to date with our latest news and updates by
                        subscribing to our monthly newsletter
                      </p>
                      <div>
                        <Grid container spacing={2}>
                          <Grid item md={7}>
                            <TextField
                              variant="outlined"
                              size="small"
                              id="input-with-icon-textfield1234"
                              className="w-100 text-white-50 rounded-sm"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <EmailTwoToneIcon />
                                  </InputAdornment>
                                )
                              }}
                            />
                          </Grid>
                          <Grid item md={5}>
                            <Button className="w-100 mt-3 mt-md-0 shadow-none btn-success">
                              <span className="btn-wrapper--label">
                                Sign up
                              </span>
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <small className="text-white-50 d-block pt-2">
                        We promise not to spam you with unwanted emails!
                      </small>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>
          </Grid>
          <div>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto mb-4 mt-5 w-25" />
            <List
              component="div"
              className="nav-transparent-alt text-nowrap d-flex justify-content-center">
              <ListItem
                button
                className="text-facebook hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'facebook']}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-twitter hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-google hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'google']}
                  className="font-size-lg"
                />
              </ListItem>
              <ListItem
                button
                className="text-instagram hover-scale-sm"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="font-size-lg"
                />
              </ListItem>
            </List>
            <div className="divider d-sm-none d-md-block rounded-circle bg-dark opacity-2 mx-auto my-4 w-25" />
            <div className="text-center d-block text-black-50">
              Copyright &copy; 2020 - UiFort.com
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
